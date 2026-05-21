<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>Users API</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen p-8">

  <div class="max-w-7xl mx-auto">

    <!-- Header -->
    <div class="flex items-center justify-between mb-8">

      <h1 class="text-4xl font-bold text-gray-800">
        Users List
      </h1>

      <button
        id="loadBtn"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
      >
        Load Users
      </button>

    </div>

    <!-- Cards -->
    <div
      id="container"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    ></div>

    <!-- Pagination -->
    <div
      id="pagination"
      class="flex justify-center gap-2 mt-10 flex-wrap"
    ></div>

  </div>

  <script>

    const btn = document.getElementById("loadBtn");
    const container = document.getElementById("container");
    const pagination = document.getElementById("pagination");

    let users = [];

    let currentPage = 1;

    const itemsPerPage = 6;

    // Fetch API
    btn.addEventListener("click", async function () {

      try {

        const response = await fetch(
          "http://172.90.90.67:8000/api/admin/users"
        );

        const result = await response.json();

        users = result.data;

        showUsers();
        showPagination();

      } catch (error) {

        console.log(error);

        container.innerHTML = `
          <h1 class="text-red-600 text-3xl font-bold">
            Failed To Fetch API
          </h1>
        `;
      }

    });

    // Show Users
    function showUsers() {

      container.innerHTML = "";

      const start = (currentPage - 1) * itemsPerPage;

      const end = start + itemsPerPage;

      const currentUsers = users.slice(start, end);

      currentUsers.forEach((user) => {

        container.innerHTML += `

          <div class="bg-white p-6 rounded-2xl shadow-lg">

            <div class="flex items-center gap-4 mb-4">

              <img
                src="${
                  user.profile_image?.url ||
                  'https://via.placeholder.com/100'
                }"
                class="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h2 class="text-xl font-bold">
                  ${user.name}
                </h2>

                <p class="text-gray-500 text-sm">
                  ${user.email}
                </p>
              </div>

            </div>

            <p>
              <span class="font-semibold">UUID:</span>
              ${user.uuid}
            </p>

            <p class="mt-2">
              <span class="font-semibold">Status:</span>

              ${
                user.is_active
                  ? '<span class="text-green-600">Active</span>'
                  : '<span class="text-red-600">Inactive</span>'
              }
            </p>

          </div>

        `;
      });

    }

    // Show Pagination
    function showPagination() {

      pagination.innerHTML = "";

      const totalPages = Math.ceil(users.length / itemsPerPage);

      for (let i = 1; i <= totalPages; i++) {

        pagination.innerHTML += `

          <button
            onclick="changePage(${i})"
            class="
              px-4 py-2 rounded-lg border
              ${
                currentPage === i
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-black'
              }
            "
          >
            ${i}
          </button>

        `;
      }

    }

    // Change Page
    function changePage(page) {

      currentPage = page;

      showUsers();
      showPagination();

    }

  </script>

</body>
</html>