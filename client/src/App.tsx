import { Chat, Img } from './components'
import Contact from './components/Contact'
import Face from './components/Face'

export default () => {
    return <div className="p-4 md:p-8 h-screen grid grid-cols-1 md:grid-rows-2  md:grid-cols-2">
        <div className='relative w-full h-[80vh] md:h-full md:col-start-2 md:row-start-1 md:row-end-3'>
            <Face />
            <Contact />
        </div >
        <Img />
        <Chat />
    </div>
}