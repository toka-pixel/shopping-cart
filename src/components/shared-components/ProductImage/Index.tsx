import ReactImageMagnify  from "react-image-magnify"

type IProps = {
  imageUrl: string;
};

function ProductImage(props: IProps) {
  const { imageUrl } = props;

  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: imageUrl,
        },
        largeImage: {
          src: imageUrl,
          width: 1000,
          height: 480,
        },
        enlargedImageContainerStyle: {
          zIndex: "100",
        },
        enlargedImageContainerDimensions: {
          width: "100%",
          height: "100%",
        },
      }}
    />
  );
}

export default ProductImage;
