var url = "./css.pdf";

function displayPDF(url) {
	// Loaded via <script> tag, create shortcut to access PDF.js exports.
	var { pdfjsLib } = globalThis;

	// The workerSrc property shall be specified.
	pdfjsLib.GlobalWorkerOptions.workerSrc = "./pdfjs-4.10.38-dist/build/pdf.worker.mjs";

	var pdfDoc = null,
		pageNum = 1,
		pageRendering = false,
		pageNumPending = null,
		scale = 1,
		canvas = document.getElementById("the-canvas"),
		ctx = canvas.getContext("2d");

	
	function renderPage(num) {
		pageRendering = true;
		// Using promise to fetch the page
		pdfDoc.getPage(num).then(function (page) {
			var viewport = page.getViewport({ scale: scale });
			 canvas.height = viewport.height;
			 canvas.width = viewport.width;

			// Render PDF page into canvas context
			var renderContext = {
				canvasContext: ctx,
				viewport: viewport,
			};
			var renderTask = page.render(renderContext);

			// Wait for rendering to finish
			renderTask.promise.then(function () {
				pageRendering = false;
				if (pageNumPending !== null) {
					// New page rendering is pending
					renderPage(pageNumPending);
					pageNumPending = null;
				}
			});
		});

		// Update page counters
		document.getElementById("page_num").textContent = num;
	}

	/**
	 * If another page rendering in progress, waits until the rendering is
	 * finised. Otherwise, executes rendering immediately.
	 */
	function queueRenderPage(num) {
		if (pageRendering) {
			pageNumPending = num;
		} else {
			renderPage(num);
		}
	}

	/**
	 * Displays previous page.
	 */
	function onPrevPage() {
		if (pageNum <= 1) {
			return;
		}
		pageNum--;
		const render = queueRenderPage(pageNum);
	}
	document.getElementById("prev").addEventListener("click", onPrevPage);

	/**
	 * Displays next page.
	 */
	function onNextPage() {
		if (pageNum >= pdfDoc.numPages) {
			return;
		}
		pageNum++;
		queueRenderPage(pageNum);
	}
	document.getElementById("next").addEventListener("click", onNextPage);

	/**
	 * Asynchronously downloads PDF.
	 */
	pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
		pdfDoc = pdfDoc_;
		document.getElementById("page_count").textContent = pdfDoc.numPages;

		// Initial/first page rendering
		renderPage(pageNum);
	});
}

 displayPDF(url);
