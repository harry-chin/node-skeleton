const assert = require(`assert`)

const Project = require(`../`)

describe(`Project`, () => {
  describe(`Test function`, () => {
    it(`should return true`, () => {
      const returnValue = Project.testFunction()
      assert.ok(returnValue)
    })
  })
})
