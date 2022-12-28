import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { changeFavoriteStatus } from "../../store/DrawerMenu/DrawerMenu";
import EmptyMenu from "../shared-components/EmptyMenu/EmptyMenu";
import { Drawer } from "antd";
 import FavoriteProduct from "./FavoriteProduct";

// import "./CartMenu.scss";

const FavoriteMenu = () => {
  const { favoriteStatus } = useAppSelector((state) => state.drawerMenu);
  const { favoriteList, numOf_Favorites } = useAppSelector(
    (state) => state.favorite
  );
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(changeFavoriteStatus(false));
  };
  return (
    <div className="favoriteMenu">
      <Drawer
        className="favorite"
        title="Favorite Items"
        placement="right"
        onClose={onClose}
        open={favoriteStatus}
      >
        {favoriteList.length > 0 ? (
          <>
            {favoriteList.map((product) => (
              <FavoriteProduct key={product.id} product={product} />
            ))}
          </>
        ) : (
          <EmptyMenu
            img={"favorite.png"}
            text_1="No favorites yet"
            text_2="Mark your favorite items and always have theme here"
          />
        )}
      </Drawer>
    </div>
  );
};

export default FavoriteMenu;
