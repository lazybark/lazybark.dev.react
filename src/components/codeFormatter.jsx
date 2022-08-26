export const GoVar = new RegExp(
    '^(.*) :='
);

export function GolangCodeStringFormatted(props){
    let ret = []
    ret.push(props.code.replace(GoVar, <span className="go-names">t</span>))
    return ret[0]
}

export function CodeTag(props){
    return <code>{props.text}</code>
}

export function GoInt(props){
    return <span className="go-int">{props.text}</span>
}

export function GoNames(props){
    return <span className="go-names">{props.text}</span>
}

export function GoFunc(props){
    return <span className="go-func">{props.text}</span>
}

export function GoString(props){
    return <span className="go-string">{props.text}</span>
}