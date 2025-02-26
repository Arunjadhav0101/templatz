import {createSlice} from "@reduxjs/toolkit";
import { LetterType } from "@/components/Letter/LetterType";
interface LetterState {
    letter: LetterType | null,
    letters: LetterType[],
    error:null|string
}
const initialState:LetterState = {
    letter:null,
    letters:[],
    error:null
}
const letterSlice = createSlice({
    name: "letter",
    initialState,
    reducers: {
        setLetter: (state, action) => {
            state.letter = action.payload
        },
        setLetters:(state, action) =>{
            state.letters = action.payload
        },
        updateLetter(state, action) {
             state.letter={ ...state, ...action.payload };
          },
    }
})

export const {setLetter,updateLetter, setLetters} = letterSlice.actions
export default letterSlice.reducer