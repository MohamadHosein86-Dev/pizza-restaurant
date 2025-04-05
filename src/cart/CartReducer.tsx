import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// تعریف تایپ برای هر آیتم در سبد خرید
interface CartItem {
    pizzaId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

// تعریف تایپ برای حالت اولیه
interface CartState {
    cart: CartItem[];
}

// حالت اولیه
const initialState: CartState = {
   cart: []
}

const cartReducer = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        // افزودن آیتم به سبد خرید
        additem(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload);
        },

        // حذف آیتم از سبد خرید با استفاده از pizzaId
        delteitem(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter(res => res.pizzaId !== action.payload);
        },

        // افزایش تعداد آیتم
        increaseQuntitiItem(state, action: PayloadAction<number>) {
            const item = state.cart.find(res => res.pizzaId === action.payload);
            if (item) {
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },

        // کاهش تعداد آیتم
        decraseQuntitiItem(state, action: PayloadAction<number>) {
            const item = state.cart.find(res => res.pizzaId === action.payload);
            if (item) {
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },

        // خالی کردن کل سبد خرید
        claerCart(state) {
            state.cart = [];
        }
    }
});
// اکشن‌ها
export const { additem, increaseQuntitiItem, decraseQuntitiItem, delteitem, claerCart } = cartReducer.actions;
export default cartReducer.reducer;

// تایپ داده‌های Redux State
interface RootState {
    cartSlice: CartState;
}

// سلیکترها برای گرفتن داده‌های سبد خرید
export const getCart = (state: RootState) => state.cartSlice.cart;

// گرفتن تعداد کل آیتم‌ها در سبد خرید
export const getquantiti = (state: RootState) =>
    state.cartSlice.cart.reduce((total, item) => total + item.quantity, 0);

// گرفتن قیمت کل آیتم‌ها در سبد خرید
export const getprice = (state: RootState) =>
    state.cartSlice.cart.reduce((total, item) => total + item.totalPrice, 0);

// گرفتن تعداد آیتم‌های مشخص با استفاده از pizzaId
export const getcurenqiantiti = (id: number) => (state: RootState) =>
    state.cartSlice.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;