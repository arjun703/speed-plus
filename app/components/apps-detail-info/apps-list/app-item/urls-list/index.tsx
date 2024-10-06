import { useEffect, useState } from "react";
import URLsListItem from "./url-item";
import URLsListHeader from "./urls-list-header";
import { Pagination, Spinner } from '@shopify/polaris';

export default function URLSlist({app_name}: any) {
    const [isLoadingURLsList, setIsLoadingURLsList] = useState(true);
    const [URLs, setURLs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchURLsListForApp() {
            try {
                setIsLoadingURLsList(true)
                const urlsResponse = await fetch(`/app/get_urls?page=${currentPage}`); // Add pagination parameter if needed
                const urlsData = await urlsResponse.json();
                setURLs(urlsData.urls)
                setTotalPages(parseInt(urlsData.meta.total_pages)); // Update total pages
            } catch (error: any) {
                alert(error.message);
            } finally {
                setIsLoadingURLsList(false);
            }
        }

        fetchURLsListForApp();
    }, [currentPage]);

    // Handle pagination
    const handlePrevPage = () => setCurrentPage(currentPage - 1);
    const handleNextPage = () => setCurrentPage(currentPage + 1);

    if (isLoadingURLsList) {
        return (
            <div style={{ display: 'flex', minHeight: '200px', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <URLsListHeader />

            {URLs.map((url, index) => (
                <URLsListItem key={index} app_name={app_name} page={currentPage} url={url} />
            ))}
            <div style={{marginTop:'10px', display:'flex', justifyContent:'center'}}>
                <Pagination
                    hasPrevious={currentPage > 1}
                    label={currentPage +'/' + totalPages}
                    onPrevious={handlePrevPage}
                    hasNext={currentPage < totalPages}
                    onNext={handleNextPage}
                />
            </div>

        </>
    );
}
