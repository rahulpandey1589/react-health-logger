import { useParams } from "react-router-dom";
import CategoryComponent from "./category-component";

const EditCategoryComponent = () => {
  const { categoryId } = useParams();

  return (
    <>
      <div className="container-fluid">
        <CategoryComponent categoryId={categoryId} actionName="Update Category"></CategoryComponent>
      </div>
    </>
  );
};

export default EditCategoryComponent;
