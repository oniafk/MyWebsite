import { createContext, useState, useEffect } from "react";
import axios from "axios";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [data, setData] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const getData = async () => {
    try {
      const headers = {
        "X-Master-Key":
          "$2a$10$dAEZnAQMq7xwSnnNBwVBB..2d.y4zEIlfIq5KJO1kwkwYZ8YgGpee",
      };
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/65598dff54105e766fd20b46",
        { headers }
      );
      console.log("API Response:", JSON.stringify(response.data, null, 5));
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterProjectsByCategory = (data, category) => {
    return data?.record.filter((item) => {
      return item.category.toLowerCase() === category.toLowerCase();
    });
  };

  useEffect(() => {
    if (currentCategory === "all") {
      setFilterItems(data?.record || []);
    } else {
      setFilterItems(filterProjectsByCategory(data, currentCategory));
    }
  }, [currentCategory, data]);

  return (
    <FilterContext.Provider
      value={{
        currentCategory,
        handleCategoryChange,
        data,
        filterItems,
        setFilterItems,
        openModal,
        setOpenModal,
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// https://drive.google.com/uc?id=1qeuixqFt55EhdDLPCdXKBkTvvB4MV8yw

// shoppi
// https://drive.google.com/file/d/1qeuixqFt55EhdDLPCdXKBkTvvB4MV8yw/view?usp=sharing

// travel
//  https://drive.google.com/file/d/1KANv_wmzmmK-hTD0ZxDegGFXsIU11mUR/view?usp=sharing

// priv game
// https://drive.google.com/file/d/1wquLUdbB1ByToTqIEK5L457PZZgW5ISS/view?usp=sharing

// sushi restaurant
// https://drive.google.com/file/d/1WLwdgDgKUwY0eLjUSk7D7H2bShR5pX_D/view?usp=sharing

// nike homepage
// https://drive.google.com/file/d/19X5C3twUBnNbtYWLFRmfQu7iouCL_uT0/view?usp=sharing

export { FilterContext };
