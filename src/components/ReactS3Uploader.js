import ApiClient from './ApiClient';

function getSignedUrl(file, callback) {
    const client = new ApiClient();
    const params = {
        objectName: file.name,
        contentType: file.type,
    };

    client.get('arn:aws:s3:::www.chefready.com', { params })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}


<ReactS3Uploader
    className={uploaderClassName}
    getSignedUrl={getSignedUrl}
    accept="image/*"
    onProgress={onProgress}
    onError={onError}
    onFinish={onFinish}
    uploadRequestHeaders={{
        'x-amz-acl': 'public-read',
    }}
    contentDisposition="auto"
/>;
