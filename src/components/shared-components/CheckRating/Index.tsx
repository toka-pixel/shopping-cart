import { StarOutlined, StarFilled } from "@ant-design/icons";

type IProps = {
  rate: number;
};

const CheckRating = (props: IProps) => {
  const { rate } = props;

  const stars= [...new Array(5)].map((arr, index) => {
    return index <= rate ? (
      <StarFilled className="filled" key={index} />
    ) : (
      <StarOutlined className="outlined" key={index} />
    );
  });


  return <div>{stars}</div>
};

export default CheckRating;
