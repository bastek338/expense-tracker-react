import React, { useContext, createContext } from 'react';
import { useCategoryExpenses } from '../../reducers/category-expenses/category-expenses.reducer';

const CategoryListContext = createContext({});

const CategoryProvider = ({children}) => {
    const { categoryList, dispatchCategory } = useCategoryExpenses();

    return <CategoryListContext.Provider value={{ categoryList, dispatchCategory }}>{children}</CategoryListContext.Provider>
}

export const useCategory = () => {
    const { categoryList, dispatchCategory } = useContext(CategoryListContext);

    return {
        categoryList,
        dispatchCategory
    }
}

export default CategoryProvider;