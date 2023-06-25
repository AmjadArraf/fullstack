<!DOCTYPE html>
<html>
<head>
    <title>Search Redirect</title>
</head>
<body>
    <form action="https://www.google.co.il/search" method="GET">
        <input type="text" name="q" placeholder="Enter your search query">
        <button type="submit">Search</button>
    </form>

    <?php
    if (isset($_GET['q'])) {
        $searchQuery = $_GET['q'];
        $searchQuery = urlencode($searchQuery);
        $googleURL = "https://www.google.co.il/search?q=" . $searchQuery;
        header("Location: $googleURL");
        exit();
    }
    ?>
</body>
</html>