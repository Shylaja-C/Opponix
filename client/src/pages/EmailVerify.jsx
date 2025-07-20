import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const EmailVerify = () => {
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth(); 

 
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError('');

      if (!user?._id) {
        setError('Please log in first');
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/send-verify-otp`,
        { userId: user._id },
        { 
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (response.data.success) {
        setOtpSent(true);
        setCountdown(60); // 60-second cooldown
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (!otp || otp.length !== 6) {
        setError('Please enter a 6-digit OTP');
        return;
      }

      setLoading(true);
      setError('');

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/verify-email`,
        { otp, userId: user._id },
        { withCredentials: true }
      );

      if (response.data.success) {
        navigate('/dashboard', { state: { verified: true } });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      
      {!otpSent ? (
        <div className="space-y-4">
          <p>We'll send a 6-digit code to your email</p>
          <button
            onClick={handleSendOtp}
            disabled={loading || countdown > 0}
            className={`w-full py-2 px-4 rounded ${
              loading || countdown > 0 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading ? 'Sending...' : 
             countdown > 0 ? `Resend in ${countdown}s` : 'Send OTP'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p>Enter the OTP sent to <strong>{user?.email}</strong></p>
          <input
            type="text"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
              setError('');
            }}
            placeholder="123456"
            className="w-full p-2 border rounded"
            maxLength={6}
          />
          <button
            onClick={handleVerifyOtp}
            disabled={loading || otp.length !== 6}
            className={`w-full py-2 px-4 rounded ${
              loading || otp.length !== 6
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
          <p className="text-sm text-gray-600">
            Didn't receive code?{' '}
            <button 
              onClick={handleSendOtp} 
              disabled={countdown > 0}
              className="text-blue-600 hover:underline disabled:text-gray-400"
            >
              Resend OTP
            </button>
          </p>
        </div>
      )}

      {error && (
        <p className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</p>
      )}
    </div>
  );
};

export default EmailVerify;