// You are building a simple upload feature for a website. The system only allows certain file types to be uploaded.
// The allowed file types are:

const allowedTypes = ['jpg', 'png', 'gif'];

const uploadedFileType = 'pdf';

let allowUpload = allowedTypes.includes(uploadedFileType);

if (allowUpload) {
    console.log('File type allowed');
} else {
    console.log('File type not supported');
}