let path = document.querySelector('#path');
        let drawLength;


        fillSvgPaths()
        document.addEventListener('scroll', fillSvgPaths);

        function fillSvgPaths() {
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            let pathLength = path.getTotalLength();

            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;

            drawLength = pathLength * scrollPercentage * 1.2;
            //drawLength = pathLength * scrollPercentage;

            path.style.strokeDashoffset = (pathLength - drawLength);
        }