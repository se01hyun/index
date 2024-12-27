import React, {useState, useRef} from "react";

function TodoEditor({onCreate}) {
    const [content, setContent] = useState("");
    const contentRef = useRef(null);
    function onChangeContent(e) {
        setContent(e.target.value);
    }
    function onSubmit() {
        if(content === "") {
            contentRef.current.focus()
        } else {
            onCreate(content);
            setContent("");
        }
    }


    function activeEnter(e) {
        if(e.key == "Enter"){
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h3>새로운 Todo 작성하기</h3>
            <div className="editor_wrapper">
                <input 
                    ref = {contentRef} // contentRef.current = <input />
                    value = {content} 
                    onChange = {onChangeContent}
                    placeholder="새로운 Todo를 입력하세요"
                    onKeyDown={activeEnter} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;