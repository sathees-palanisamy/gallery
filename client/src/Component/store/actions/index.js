export const updateData = (imageLink, imageHeading, imagePrice) => {

    return {
        type: 'DATA_MAPPING',
        imageLink: imageLink,
        imageHeading: imageHeading,
        imagePrice: imagePrice
    }

}