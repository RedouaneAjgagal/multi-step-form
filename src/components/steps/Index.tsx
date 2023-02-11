import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
import NavigationBtn from './NavigationBtn'


export const Index = () => {
    const navigationBtns = [
        { currentStep: 1 },
        { currentStep: 2 },
        { currentStep: 3 },
        { currentStep: 4 },
    ]
    return (
        <div style={{ backgroundImage: `url(${sidebarMobile})` }} className='bg-no-repeat bg-cover flex h-full min-h-[14rem] justify-center'>
            <div className='flex gap-5 mb-16 items-center'>
                {navigationBtns.map(btn => <NavigationBtn key={btn.currentStep} currentStep={btn.currentStep} />)}
            </div>
        </div>
    )
}