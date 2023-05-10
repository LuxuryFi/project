import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookFavorite } from "../../../store/slices/booksSlice";

export default function Favorite() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectBookFavorite);

  useEffect(() => {
    dispatch();
  });
  return <div>Favorite</div>;
}
