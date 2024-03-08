import RightSidebar from "@/components/blog/RightSidebar/RightSidebar";
import Header from "@/components/header/Header";
import styles from './blog.module.scss';

export default function BlogLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div className={styles.Blog}>
                {children}
                <RightSidebar />
            </div>
        </>
    );
}