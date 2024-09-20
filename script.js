document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoFile = document.getElementById('videoFile').files[0];

    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);

        // Display the uploaded video
        const videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;
        videoElement.width = 400;

        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';
        videoWrapper.appendChild(videoElement);

        document.getElementById('videoList').appendChild(videoWrapper);

        document.getElementById('status').innerText = 'Video uploaded successfully!';
    } else {
        document.getElementById('status').innerText = 'Please select a video file.';
    }
});
