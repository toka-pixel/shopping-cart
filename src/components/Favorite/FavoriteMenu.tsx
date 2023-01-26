import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { changeFavoriteStatus } from "../../store/DrawerMenu/DrawerMenu";
import EmptyMenu from "../shared-components/EmptyMenu/EmptyMenu";
import { Drawer } from "antd";
 import FavoriteProduct from "./FavoriteProduct";

// import "./CartMenu.scss";

const FavoriteMenu = () => {
  const { favoriteStatus } = useAppSelector((state) => state.drawerMenu);
  const { favoriteList } = useAppSelector(
    (state) => state.favorite
  );
  const dispatch = useAppDispatch();
  const { isDarK } = useAppSelector((state) => state.theme);

  const onClose = () => {
    dispatch(changeFavoriteStatus(false));
  };
 
  return (
    <div className="favoriteMenu">
      <Drawer
      
      className={isDarK ? "darkMenu" : ""}
        title="Favorite Items"
        placement="right"
        onClose={onClose}
        open={favoriteStatus}
      >
          <div className={isDarK ? "dark" : "light"}>
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
        </div>
      </Drawer>
    </div>
  );
};

export default FavoriteMenu;
