import express from "express"
import { Application, Request, Response } from "express"
import { Client, fql } from "fauna"
import cors from "cors"
import "dotenv/config"
import _ from "lodash"

import { currentDate } from "./utils/index.ts"
import { logger } from "./middleware/logger.ts"

const port = 3000
const secret = process.env.FAUNA_SECRET_KEY

const app: Application = express()

const client = new Client({
	secret: secret,
})

app.use(cors())
app.use(express.json())
app.use(logger)

app.get("/", (req: Request, res: Response) => {
	res.sendFile(__dirname + "/views/index.html")
})

app.get("/customer", async (req: Request, res: Response) => {
	try {
		const result = await client.query(fql`Customer.all()`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.get("/manager", async (req: Request, res: Response) => {
	try {
		const result = await client.query(fql`Manager.all()`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.get("/order", async (req: Request, res: Response) => {
	try {
		const result = await client.query(fql`Order.all()`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.get("/product", async (req: Request, res: Response) => {
	try {
		const result = await client.query(fql`Product.all()`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.get("/store", async (req: Request, res: Response) => {
	try {
		const result = await client.query(fql`Store.all()`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.post("/customer", async (req: Request, res: Response) => {
	try {
		const data = req.body
		const result = await client.query(fql`Customer.create(${data as any})`)
		res.json(result.data)
	} catch (err) {
		console.error(err)
	}
})

app.use("/customer/", async (req: Request, res: Response) => {
	try {
		const url = req.url
		const id = url.split("/").pop()
		let result: any
		if (_.isEmpty(req.body)) {
			result = await client.query(
				fql`Customer.byId(${id as string})!.delete()`,
			)
			res.json(result.data)
		} else {
			const data = req.body
			result = await client.query(
				fql`Customer.byId(${id as string})!.update(${data as any})`,
			)
			res.json(result.data)
		}
	} catch (err) {
		console.error()
		res.sendFile(__dirname + "/views/404.html")
	}
})

app.all("*", (req: Request, res: Response) => {
	res.sendFile(__dirname + "/views/404.html")
})

async function main() {
	await client
		.query(fql`Date(${currentDate}).toString()`)
		.then((result) => {
			console.log(result.data)
			console.log("Connected to FaunaDB")
		})
		.catch((err) => {
			console.error(err)
		})
	app.listen(port, () => {
		console.log(`App is listening on port ${port}`)
	})
}

main()
