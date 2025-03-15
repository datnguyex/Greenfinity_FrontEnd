import { Link } from 'react-router-dom';

interface RequireLoginProps {
    t: (key: string) => string;
    cx: (...args: (string | undefined | null | boolean)[]) => string;
}

function RequireLogin({ t, cx }: RequireLoginProps) {
    return (
        <div>
            <h1 className="text-center text-[#15bdd7] text-[2.6rem] font-semibold">{t('pleaseLogin')}</h1>
            <Link
                to={'/login'}
                className="text-[#fff] mb-[120px] bg-[#15bdd7] flex justify-center items-center mx-auto font-bold border p-[1rem] border-[#fff] size-[1.8rem] gap-[0.8rem] min-h-[5.2rem] w-[16rem] rounded-[0.8rem] "
            >
                {t('login')}
            </Link>
            <div
                className={`text-[#009383] flex text-[1.6rem] font-bold justify-center items-center w-[40%]
            mx-auto relative border-t-2 border-b-2 border-[#009383] h-[4.4rem] ${cx('scoreBar')}`}
            >
                {t('weekContribute')}
            </div>
        </div>
    );
}

export default RequireLogin;
