import { getAddress } from "../servesesAPI/apiGeocoding";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


export const fetchAddress = createAsyncThunk(
  "userName/fetchAddress"
  ,
  async function () {
    // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
  }
)


const initialState = {
  username:"",
  status:"idle",
  error:"",
  position:{},
  address:""
}


 const userSlice= createSlice({
  name:"userName",
  initialState ,
  reducers:{
    updatename(state = initialState , action:PayloadAction<string>){
      state.username = action.payload
    }
  },
  extraReducers:(builder) =>
    builder
      .addCase(fetchAddress.pending , (state = initialState )=>{
        state.status = "loading"
      })
      .addCase(fetchAddress.fulfilled , (state = initialState , action)=>{
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle"
      })
      .addCase(fetchAddress.rejected , (state = initialState )=>{
        state.status = "error"
        state.error = "there was error in get position."
      })
});


export const {updatename} = userSlice.actions
export default userSlice.reducer