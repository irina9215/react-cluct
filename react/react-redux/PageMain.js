import { changeBtnText } from "./action"

const PageMain = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.changeText('🐔按钮')
            }}>
                {
                    props.btnText
                }
            </button>
        </div>
    )
}
// 映射store.getState()的数据到pageMain
const mapStateToProps = (state) => {
    return {
        btnText: state.PageMain.btnText
    }
}
// 使用store.dispatch函数映射到PageMain
const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => {
            dispatch(changeBtnText(text))
        }
    }
}
// 简写mapDispatchToProps
// const mapDispatchToProps = {
//     changeText: changeBtnText
// }

export default connect(mapStateToProps, mapDispatchToProps)(PageMain)