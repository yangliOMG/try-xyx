
Page({
	data: {
		nextData: [
			[0, 2, 0, 0],
			[2, 2, 2, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		gameData: [
			[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		],
		cur: {
			data: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			], 
		},
		nextDivs: [],
		gameDivs: []
	},
	onLoad: function () {
		this.initGame()
	},
	initGame: function () {
		let gameData = this.data.gameData, gameDivs = [],
			nextData = this.data.nextData, nextDivs = [],
			dataArr = [gameData, nextData], divsData = [gameDivs, nextDivs]
		for (let x = 0; x < dataArr.length; x++) {
			for (let i = 0; i < dataArr[x].length; i++) {
				let gameDiv = []
				for (let j = 0; j < dataArr[x][i].length; j++) {
					let newNode = {}
					newNode.className = ['none', 'done', 'current'][dataArr[x][i][j]]
					newNode.top = (i * 20) + 'px'
					newNode.left = (j * 20) + 'px'
					gameDiv.push(newNode)
				}
				divsData[x].push(gameDiv)
			}
		}
		this.setData({ gameDivs, nextDivs })
	},
	down: function () {
		let self = this;

		if (self.canDown()) {
			self.cur.getDown();
			return true;
		} else {
			return false;
		}
	},
	canDown () {
		let cur = this.data.cur;
		cur.origin.x += 1;
		if (this.isVaild(cur)) {
			return true;
		} else {
			return false;
		}
	},
	isVaild (datas) {
		for (let i = 0; i < datas.data.length; i++) {
			for (let j = 0; j < datas.data[0].length; j++) {
				if (datas.data[i][j] != 0) {
					if (!this.check(datas.origin, i, j)) {
						return false;
					}
				}
			}
		}
		return true;
	},
	check (pos, x, y) {
		let self = this.data;
		if (pos.x + x >= self.gameData.length) {
			return false;
		} else if (pos.x + x < 0) {
			return false;
		} else if (pos.y + y >= self.gameData[0].length) {
			return false;
		} else if (pos.y + y < 0) {
			return false;
		} else if (self.gameData[x + pos.x][y + pos.y] == 1) {
			return false;
		} else {
			return true
		}
	}
})