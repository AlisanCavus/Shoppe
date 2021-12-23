import { useSpring, animated } from 'react-spring';


function AddItem() {

    const sty = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1, },
        delay: 300,
      })
    return (
        <animated.div style={ sty }>
            <form className="form">
                <input className="input" type="text" placeholder="Add an Item"/>
            </form>
        </animated.div>
    )
}

export default AddItem
