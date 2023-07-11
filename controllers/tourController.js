import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { getAllTours, getTour, createTour, updateTour, deleteTour, checkID, checkBody };
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../4-natours/starter/dev-data/data/tours-simple.json`));

const checkID = (req, res, next, val) => {
	console.log(`Tour id is: ${val}`);

	const id = Number(req.params.id);
	const tour = tours.find((el) => el.id === id);

	if (tour === undefined) {
		return res.status(404).send({
			status: "fail",
			message: "Invalid ID",
		});
	}
	next();
};

const checkBody = (req, res, next) => {
	console.log("check body");
	if (!req.body.name || !req.body.price) {
		return res.status(400).json({
			status: "fail",
			message: "Missing name or price",
		});
	}

	next();
};

const getAllTours = (req, res) => {
	res.status(200).json({
		status: "success",
		requestedAt: req.requestTime,
		results: tours.length,
		data: {
			tours,
		},
	});
};

const getTour = (req, res) => {
	const id = Number(req.params.id);
	const tour = tours.find((el) => el.id === id);

	res.status(200).json({
		status: "success",
		data: {
			tour,
		},
	});
};

const createTour = (req, res) => {
	const newId = tours[tours.length - 1].id + 1;
	const newTour = Object.assign({ id: newId }, req.body);

	tours.push(newTour);
	fs.writeFile(`${__dirname}/4-natours/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
		res.status(201).json({
			status: "success",
			data: {
				tour: newTour,
			},
		});
	});
};

const updateTour = (req, res) => {
	const tour = tours.find((el) => el.id === id);

	res.status(200).json({
		status: "success",
		data: {
			tour: "<updated tour here>",
		},
	});
};

const deleteTour = (req, res) => {
	res.status(204).json({
		status: "success",
		data: null,
	});
};