const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFileSync( fileName , fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName , , 'UTF8' , (err , data)=>{console.log(data)})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.appendFileSync( fileName , fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlinkSync(fileName)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
