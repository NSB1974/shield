import FlowInteractionTemplateAudit from 0xfd100e39d50a13e6

pub fun main(address: Address): [String] {
    let auditManager = getAccount(address).getCapability(FlowInteractionTemplateAudit.AuditManagerPublicPath)
                            .borrow<&{FlowInteractionTemplateAudit.AuditManagerPublic}>()
                            ?? panic("This address does not have a AuditManager.")

    return auditManager.getAudits()
}