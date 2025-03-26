const { useState, useEffect } = require("react")

const PaginationWithAPI = () => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState(1)
    const [currentPage, setCurrentPage] = useState (1)
    const [totalPages, setTotalPages] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
const itemsPerPage = 10;
    useEffect (() => {
        const fetchData = async () =>{
        setIsLoading(true)
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
            const data  = await response.json()
            setPosts(data);
            setFilteredPosts(data);
            setTotalPages  (Math.ceil (data.length / itemsPerPage));

        } catch (error) {
            console.log("Errror fetching data:", error);
            
        } finally {
            setIsLoading (false)
        }
        }

        fetchData ()

    } , []  )

    useEffect (()  => {
        if (searchTerm) {
            const filtered = posts.filter (post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 post.body.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setFilteredPosts(filtered)
                setTotalPages(Math.ceil(filtered.length / itemsPerPage))
                setCurrentPage(1) // reset to first page when searching        
            
        } else {
            setFilteredPosts(posts)
            setTotalPages (Math.ceil(filtered.length / itemsPerPage))
         }
    }, [searchTerm, posts])


    const handlePageChange = (page) =>{
        if (page < 1 || page > totalPages) 
            return
        setCurrentPage(page);
    };
    const visiblePages = () => {
        const maxVisible = 5;
        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min (totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = math.max(1, end - maxVisible + 1)
    }
    return Array.from({length: end - start + 1}, (_, i) => start + i)
    };

    // get current items to dispay
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice (indexOfFirstItem, indexOfLastItem)

    return(
        <div ></div>
    )

}