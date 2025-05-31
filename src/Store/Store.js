import { create } from "zustand";
import { devtools } from "zustand/middleware";
import ProductViewModel from "../viewModel/ProductViewModel/ProductViewModel";

const useStore = create(devtools((set, get)=>({

    ...ProductViewModel(set, get),

})))



export default useStore