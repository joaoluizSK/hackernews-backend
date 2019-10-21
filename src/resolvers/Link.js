function postedBy(parent, args, context) {
    return context.prisma.link({id: parent.id}).postedBy()
}

function votes(parent, args, context) {
    return context.prisma.links({id: parent.id}).votes()
}

module.exports = {
    postedBy,
    votes
}