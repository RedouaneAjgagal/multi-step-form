import NavigationBtn from './NavigationBtn'


export const Index = () => {
    const navigationBtns = [
        { currentStep: 1, title: 'Your info' },
        { currentStep: 2, title: 'Select Plan' },
        { currentStep: 3, title: 'Add-ons' },
        { currentStep: 4, title: 'Summary' }
    ]
    return (
        <div className={`bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover flex justify-center absolute h-[14rem] w-full md:static md:min-h-full md:h-auto md:rounded-xl md:justify-start md:items-start md:p-8 md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] md:bg-bottom`}>
            <div className='flex gap-5 mb-16 items-center md:flex-col md:items-start'>
                {navigationBtns.map(btn => <NavigationBtn key={btn.currentStep} currentStep={btn.currentStep} title={btn.title} />)}
            </div>
        </div>
    )
}