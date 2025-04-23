import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userType {
    user: { name: string | null, email: string | null, phoneNumber: string | null, image: string | null },
    token: { accessToken: string | null, refreshToken: string | null }
}

type addUserType = { name: string, email: string, phoneNumber: string, image: string, accessToken: string, refreshToken: string }

const initialState: userType = {
    user: { name: null, email: null, phoneNumber: null, image: null },
    token: { accessToken: null, refreshToken: null }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, { payload }: PayloadAction<addUserType>) => {
            state.user.name = payload?.name;
            state.user.email = payload?.email;
            state.user.phoneNumber = payload?.phoneNumber;
            state.user.image = payload.image;
            state.token.accessToken = payload.accessToken;
            state.token.refreshToken = payload.refreshToken;
        },

        removeUser: (state) => {
            state.user.name = null;
            state.user.email = null;
            state.user.phoneNumber = null;
            state.user.image = null;

            state.token.accessToken = null;
            state.token.refreshToken = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUserDetails, removeUser } = userSlice.actions;

export default userSlice.reducer;