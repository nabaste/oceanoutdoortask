'use client'

import React, { useState, useRef, useEffect } from 'react';
import jsQR from 'jsqr';

const QRCodeScanner = () => {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState('');
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startScanning = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            console.log('startScanning');
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                setScanning(true);
                scanQRCode();
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopScanning = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            setScanning(false);
        }
    };

    const scanQRCode = () => {
        console.log('startScanningQR');
        //if (scanning && videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            //if (video.readyState === video.HAVE_ENOUGH_DATA) {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                // const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, 1920, 1080);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    setResult(code.data);
                    stopScanning();
                } else {
                    requestAnimationFrame(scanQRCode);
                }
            //} else {
            //    requestAnimationFrame(scanQRCode);
            //}
        //}
    };

    useEffect(() => {
        return () => {
            stopScanning();
        };
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            <button
                onClick={scanning ? stopScanning : startScanning}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                {scanning ? 'Stop Scanning' : 'Start Scanning'}
            </button>
            <div className="relative w-full max-w-md aspect-video">
                <video ref={videoRef} className="w-full h-full object-cover" />
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" style={{ display: 'none' }} />
            </div>
            {result && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h2 className="text-lg font-semibold mb-2">QR Code Result:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default QRCodeScanner;