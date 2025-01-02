// JavaScript source code
let button = document.getElementById("downloadbutton");




async function getdata() {
	let urls = document.getElementById("url").value.trim();
	const link = `https://twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com/tweetgrab?url=${urls}`;
	try {
		let response = await fetch(link, {

			method: 'GET',
			headers: {
				'x-rapidapi-key': 'befe5d11d4msh3f8ac137c2f220cp125f49jsn634285b07b42',
				'x-rapidapi-host': 'twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com'
			}


		})
		let answer = await response.json();
		console.log(answer);
		let downloadlink = answer.media_list[0].variants[1].url;
		

		let downloadAnchor = document.createElement("a");
		downloadAnchor.href = downloadlink;
		downloadAnchor.download = 'video.mp4';  // Name of the file to be downloaded
		downloadAnchor.click();
		
		


	} catch (error) {
		console.error(error);
	}
}
button.addEventListener("click", getdata);