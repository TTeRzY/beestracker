import Sidebar from "../../components/admin/sidebar";
import Navbar from "../../components/admin/navbar";

export default function Admin() {
	return(
		<div className="admin-wrapper">
			<Navbar />
			<Sidebar />
		</div>
	)
}