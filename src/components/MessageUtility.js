class MessageUtility {
    static getErrorFromResponse(err) {
        if (err.response.data.errors?.length > 0) {
            return err.response.data.errors[0].defaultMessage;
        }
        return err.response.data.message;
    }
}

export default MessageUtility;
