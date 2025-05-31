import { create } from "zustand";
import { devtools } from "zustand/middleware";
import ProductViewModel from "../viewModel/ProductViewModel/ProductViewModel";
import CartViewModel from "../viewModel/CartViewModel/CartViewModel";

const useStore = create(devtools((set, get)=>({

    ...ProductViewModel(set, get),
    ...CartViewModel(set, get),

})))



export default useStore