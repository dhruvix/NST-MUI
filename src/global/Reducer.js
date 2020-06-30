export const INITIAL_STATE = {
    content:"",
    style:"",
    resultimg:null,
    instruct:false,
    disp:false,
    loading:false,
    showimgs:false,
    darkMode:false
};

export const reducer = (state,action) => {
    switch(action.type){
        case 'DISPLAY_IMAGE': return {
            ...state,
            disp: !state.disp
        };
        case 'INSTRUCTIONS': return {
            ...state,
            instruct: !state.instruct
        };
        case 'SET_IMAGES': return {
            ...state,
            content: action.content,
            style: action.style,
            showimgs:true,
            loading: true
        };
        case 'LOADING': return {
            ...state,
            loading: false
        };
        case 'SUCCESS': return {
            ...state,
            loading:false,
            resultimg: action.result,
            disp: true,
        };
        case 'TOGGLE_THEME': return {
            ...state,
            darkMode: !state.darkMode
        };
        default: return state;
    }
};

export const submit = (content,style)=>{
    return {
        type:'SET_IMAGES',
        content: content,
        style: style
    }
};

export const unload = () => {
    return {
        type:'LOADING'
    }
};

export const toggledisp = () => {
    return {
        type:'DISPLAY_IMAGE'
    }
};

export const toggleinst = () => {
    return {
        type:'INSTRUCTIONS'
    }
};

export const setResult = (img) => {
    return {
        type: 'SUCCESS',
        result: img
    }
};

export const toggleTheme = () => {
    return {
        type: 'TOGGLE_THEME'
    }
}