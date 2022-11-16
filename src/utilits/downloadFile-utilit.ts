export const downloadFile = () => {
    fetch('CVRemezMaxim.pdf')
        .then((resp) => {
            resp.blob()
                .then((resp) => {
                    const downloadUrl = window.URL.createObjectURL(resp);
                    fetch(downloadUrl).then((resp) => resp.blob()).then(() => {
                        let aLink = document.createElement('a')
                        aLink.href = downloadUrl
                        aLink.download = 'CVRemezMaxim.pdf'
                        aLink.click()
                    })


                })
        })
}