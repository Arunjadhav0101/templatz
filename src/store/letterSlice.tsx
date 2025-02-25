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
        }
    }
})

export const {setLetter, setLetters} = letterSlice.actions
export default letterSlice.reducer