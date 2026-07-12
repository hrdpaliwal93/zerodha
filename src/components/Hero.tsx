import heroImage from '../assets/hero.svg'
export const Hero = () => {
    return <div className='flex flex-col jusify-evenly items-center border-1  w-full'>
        <div className='w-2xl border-3'>
            <img src={heroImage}  className='border-2'/>
        </div>
        <div className='border-2'>
            <div className='flex flex-col items-center'>
                <p>Invest in everything</p>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            </div>
            <div>
                <button>Sign up for free</button>
            </div>

        </div>
    </div>
}