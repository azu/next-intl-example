import Link from "next/link";

const Home = () => {
    return <div>
        <ul>
            <li><Link href={"/en/"}>en</Link></li>
            <li><Link href={"/de/"}>de</Link></li>
            <li><Link href={"/ja/"}>ja</Link></li>
        </ul>
    </div>
}

export default Home;
