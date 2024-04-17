// import { createReducer, on } from '@ngrx/store';
// import { addCharacter, loadCharacter, removeCharacter, editCharacter } from './characters.actions';
// import { CharactersState } from './characters.state';

// const initialState: CharactersState = {
//   characters: []
// };

// // Effects on the third step of rgrx common flow
// export const charactersReducer = createReducer(
//   initialState,
//   on(addCharacter, (state:any, { character }: any) => ({
//     ...state,
//     characters: [
//       ...state.characters, 
//       {
//         id: state.characters.length > 0 ? Math.max(...state.characters.map((item:any) => item.id)) + 1 : 1,
//         ...character,
//       },
//     ]
//   })),
//   on(editCharacter, (state:any, {id, character}:any) => ({
//     ...state,
//     characters: state.characters.map((item: any)=> item.id == id ? {...item, ...character} : item)
//   })),
//   on(loadCharacter, (state:any) => ({
//     ...state,
//     characters: [...state.characters]
//   })),
//   on(removeCharacter, (state:any, { name }:any) => ({
//     ...state,
//     characters: state.characters.filter((item:any) => item.name !== name)
//   }))
  
// );
