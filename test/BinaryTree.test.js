const BinaryTree = require("../src/structures/BinaryTree");
const TreeNode = require("../src/models/TreeNode");

const BT = new BinaryTree();

describe("BinaryTree", () => {
    describe("constructor", () => {
        it("should create an instance of BinaryTree", () => {
            expect(BT).toBeInstanceOf(BinaryTree);
        });
        it("should set the root property to null", () => {
            expect(BT.root).toBeNull();
        });
    });

    describe("get root", () => {
        it("should return the set TreeNode", () => {
            // New instance to not override existing root node
            const tree = new BinaryTree();
            const root = new TreeNode("root");
            tree._root = root;
            expect(tree.root).toBeInstanceOf(TreeNode);
            expect(tree.root).toMatchObject(root);
        });
    });

    describe("insert", () => {
        const insertNodes = [
            new TreeNode(642, 642),
            new TreeNode(834, 834),
            new TreeNode(166, 166),
        ];

        it("should throw a TypeError if a non TreeNode is passed", () => {
            const fakeNode = { data: "fake data" };
            expect(() => BT.insert(fakeNode)).toThrow(TypeError);
        });
        it("should insert the TreeNodes into the tree", () => {
            BT.insert(insertNodes[0]); // Testing inserting individual nodes
            BT.insert(insertNodes[1]);
            BT.insert(insertNodes[2]);
            const find642 = BT.find((node) => node.key === 642);
            const find834 = BT.find((node) => node.key === 834);
            const find166 = BT.find((node) => node.key === 166);
            expect([find642, find834, find166]).toMatchObject([
                insertNodes[0],
                insertNodes[1],
                insertNodes[2],
            ]);
        });
        it("should should set the root node as the first given node", () => {
            expect(BT.root).toMatchObject(insertNodes[0]);
        });
    });
});
